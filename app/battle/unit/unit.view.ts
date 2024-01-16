namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		@$mol_mem
		id() {
			return $mol_guid()
		}

		attack_enabled(): boolean {
			return this.unit().health() > 0
		}

		health() {
			return `Здоровье: ${ this.unit().health() }`
		}

		attack() {
			return `Атака: ${ this.unit().attack() }`
		}

		name() {
			return `Имя: ${ this.unit().name() }`
		}

		type() {
			return this.unit().type()
		}

		use_attack( next?: any ) {
			this.battle().next_turn()
			this.battle().log_attack( this.unit(), this.target() )
			this.unit().use_attack( this.target() )
		}


		skill_list(): readonly any[] {
			return this.skills().map( skill => this.Skill( skill.id() ) )
		}

		get_skill( id: string ) {
			return this.skills().find( skill => skill.id() === id )
		}

		skill_name( id: any ): string {
			return this.get_skill( id )?.name() || 'no name'
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.description() || 'no description'
		}

		use_skill( id: string, next?: any ) {
			const skill = this.get_skill( id )
			if( skill ) {
				this.battle().next_turn()
				this.battle().log_skill( this.unit(), this.target(), skill )
				this.unit().use_skill( [ this.target() ], skill )
			}
		}

		skills() {
			return this.unit().skills()
		}
	}
}
