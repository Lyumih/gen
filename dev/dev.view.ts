namespace $.$$ {
	export class $gen_dev extends $.$gen_dev {

		@$mol_mem
		hero(): $gen_engine_item_unit {
			return new $gen_engine_item_unit_all().milis()

		}

		@$mol_mem
		enemy(): $gen_engine_item_unit {
			return new $gen_engine_item_unit_all().mario()
		}

		battle() {
			return new $gen_engine_battle()
		}

		test() {
			this.hero().use_skill( [ this.enemy() ], this.skill(), this.battle() )
		}

		@$mol_mem
		all_skill_list(): readonly any[] {
			return this.skills().all().map( skill => this.Skill( skill.id ) )
		}

		get_skill( id: string ) {
			return this.skills().all().find( skill => skill.id === id )
		}

		skill_name( id: any ): string {
			return this.get_skill( id )?.name() || 'no name'
		}

		skill_code( id: any ): string {
			return this.get_skill( id )?.use.toString() || 'no code'
		}

		skill() {
			return $gen_engine_item_skill.make( {
				use: ( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) => {
					eval( this.code() )
					return 'success use skill'
				}
			} )
		}
	}
}
