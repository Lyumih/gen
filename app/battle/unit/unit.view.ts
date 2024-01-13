namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		@$mol_mem
		id() {
			return this.$.$mol_guid()
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

		use_attack( next?: any ) {
			this.unit().use_attack( this.target() )
		}


		skill_list(): readonly any[] {
			return this.skills().map( skill => this.Skill( skill.id ) )
		}

		get_skill( id: string ) {
			return this.skills().find( skill => skill.id === id )
		}

		skill_name( id: any ): string {
			return this.get_skill( id )?.name || 'no name'
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.description || 'no description'
		}

		use_skill( id: string, next?: any ) {
			this.unit().use_skill( [ this.target() ], this.get_skill( id ) )
		}

		skills() {
			return [
				{
					id: 'skill1',
					name: 'Хил',
					description: 'Исцеляет на 10 здоровья',
					mode: 'skill',
					use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
						source.health( source.health() + 10 )
					}
				},
				{
					id: 'skill2',
					name: 'Мощный удар',
					description: 'Урон х2',
					mode: 'skill',
					use: ( source: $gen_engine_unit, target: $gen_engine_unit[] ) => {
						target[ 0 ].health( target[ 0 ].health() - source.attack() * 2 )
					}

				}
			]
		}
	}
}
