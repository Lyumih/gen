namespace $ {
	export class $gen_engine_item_skill_all extends $.$mol_object {
		@$mol_mem
		all(): $gen_engine_item_skill[] {
			return this.resource()
		}

		create_id_root( id_root: string ) {
			return `skill-${ id_root }`
		}

		resource(): $gen_engine_item_skill[] {
			return [
				this.$.$gen_engine_item_skill.make( {
					id_root: () => this.create_id_root( '1' ),
					name: () => 'Хил',
					description: () => 'Исцеляет на 10 здоровья',
					use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
						source.health( source.health() + 10 )
						return 'Хил'
					}
				} ),
				this.$.$gen_engine_item_skill.make( {
					id_root: () => this.create_id_root( '2' ),
					name: () => 'Сильный удар',
					description: () => 'Урон x2',
					use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
						targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 2 )
						return 'Сильный удар'
					}
				} ),
				this.$.$gen_engine_item_skill.make( {
					id_root: () => this.create_id_root( '3' ),
					name: () => 'Сильный удар и самолечение',
					description: () => 'Урон x4 и лечение себя на 10',
					use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
						targets[ 0 ].health( targets[ 0 ].health() - source.attack() * 4 )
						source.health( source.health() + 10 )
						return 'Сильный удар и самолечение'
					}
				} )
			]
		}


	}
}
