namespace $ {
	export class $gen_engine_item_skill extends $gen_engine_item {

		// override type() {
		// 	return 'skill'
		// }

		defaults() {
			return {
				...super.defaults(),
				use_plain: '',
			}
		}

		/** Метод для использования данного умения. используется дальше eval */
		use_plain( next?: string ) {
			return this.value( 'use_plain', next )
		}

		/** Метод для использования данного умения */
		@$mol_action
		use( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) {
			eval( this.use_plain() )
		}
	}
}
