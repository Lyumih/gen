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

		use_plain( next?: string ) {
			return this.value( 'use_plain', next )
		}

		/** Метод для использования данного умения */
		@$mol_action
		use( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) {
			console.log( "USE", this.use_plain(), source, targets )
			// const use_test = () => {
			// 	console.log( source )
			// 	source.health( source.health() + 10 )
			// 	battle.log( `${ source.name() } исцеляется на 10 здоровья` )
			// }
			eval( this.use_plain() )
			// let use_me = () => eval( this.use_plain() )
			// console.log( 'fun', use_me, this.use_plain() )
			// use_me()()
		}
	}
}
