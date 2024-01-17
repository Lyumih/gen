namespace $.$$ {
	export class $gen_app_battle_unit extends $.$gen_app_battle_unit {

		// @$mol_mem
		// id() {
		// 	return thi
		// }

		attack_enabled(): boolean {
			return this.unit().health() > 0
		}

		id(): string {
			return this.unit().id()
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

		// use_attack( next?: any ) {
		// 	console.log( 'use_attack12', this.targets() )
		// 	if( this.targets()?.length > 0 ) {
		// 		this.battle().next_turn()
		// 		this.battle().log_attack( this.unit(), this.targets() as $gen_engine_item_unit[] )
		// 		this.unit().use_attack( this.targets() as $gen_engine_item_unit[], this.battle() )
		// 	}
		// }

		// use_skill( id: string, next?: any ) {
		// 	const skill = this.get_skill( id )
		// 	if( skill && this.targets()?.length > 0 ) {
		// 		this.battle().next_turn()
		// 		this.battle().log_skill( this.unit(), this.targets() as $gen_engine_item_unit[], skill )
		// 		this.unit().use_skill( this.targets() as $gen_engine_item_unit[], skill, this.battle() )
		// 	}
		// }


		skills() {
			return this.unit().skills()
		}

		skill_list(): readonly any[] {
			return this.skills().map( skill => this.Skill( skill.id() ) )
		}

		get_skill( id: string ) {
			return this.skills().find( skill => skill.id() === id )
		}

		skill_name( id: any ): string {
			return `${ this.get_skill( id )?.name() }: ${ this.get_skill( id )?.id() }` || 'no name'
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.description() || 'no description'
		}


	}
}
