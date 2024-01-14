namespace $.$$ {
	export class $gen_dev extends $.$gen_dev {

		@$mol_mem
		hero(): $gen_engine_unit {
			return this.$.$gen_engine_unit.make( {
				name: () => 'Герой',
				type: () => 'hero',
			} )
		}

		@$mol_mem
		enemy(): $gen_engine_unit {
			return this.$.$gen_engine_unit.make( {
				name: () => 'Враг',
				type: () => 'enemy',
			} )
		}

		test() {
			console.log( 'Использовано тестовое умение' )
			this.hero().use_skill( [ this.enemy() ], this.skill() )
		}

		skill() {
			return {
				id: 'skill1',
				name: 'Хил',
				description: 'Исцеляет на 10 здоровья',
				mode: 'skill',
				use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
					console.log( 'code', this.code() )
					eval( this.code() )
				}
			}
		}
	}
}
