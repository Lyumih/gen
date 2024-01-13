namespace $.$$ {
	export class $gen_dev extends $.$gen_dev {

		hero(): $gen_engine_unit {
			return this.$.$gen_engine_unit.make( {
				name: () => 'Герой',
				type: () => 'hero',
			} )
		}

		enemy(): $gen_engine_unit {
			return this.$.$gen_engine_unit.make( {
				name: () => 'Враг',
				type: () => 'enemy',
			} )
		}

		test() {
			console.log( 'test' )
		}

		skill() {
			return {
				id: 'skill1',
				name: 'Хил',
				description: 'Исцеляет на 10 здоровья',
				mode: 'skill',
				use: ( source: $gen_engine_unit, targets: $gen_engine_unit[] ) => {
					source.health( source.health() + 10 )
				}
			}
		}
	}
}
