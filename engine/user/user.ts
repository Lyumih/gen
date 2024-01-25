namespace $ {
	export class $gen_engine_user extends $gen_engine_entity {

		defaults() {

			// const unit = new $gen_engine_item_unit().defaults()
			// const unit = $gen_engine_item_unit.defaults()
			return {
				...super.defaults(),
				id_root: 'id-root-user',
				name: 'no name',
				login: 'no login',
				email: 'no email',
				role: 'user',
				units_data: [] as ReturnType<$gen_engine_item_unit[ 'defaults' ]>[],
			}
		}



		logout() {
			console.log( 'Пользователь вышел' )
		}

		id_root( next?: string ) {
			return this.value( 'id_root', next )
		}

		name( next?: string ) {
			return this.value( 'name', next )
		}

		login( next?: string ) {
			return this.value( 'login', next )
		}

		email( next?: string ) {
			return this.value( 'email', next )
		}

		role( next?: string ) {
			return this.value( 'role', next )
		}

		units_data( next?: ReturnType<this[ 'defaults' ]>[ 'units_data' ] ) {
			return this.value( 'units_data', next )
		}

		units() {
			// return this.units_data().map( unit => $gen_engine_item_unit.make( {
			// 	defaults: () => ( {
			// 		...unit
			// 	} )
			// } ) )
			// return [] as ReturnType<this[ 'defaults' ]>[ 'units_data' ]
			return [] as $gen_engine_item_unit[]
			// const value = this.value( 'units', next?.map( unit => unit.data() ) )
			// return value.map( unit => $gen_engine_item_unit.make( {
			// 	defaults_patch: () => ( {
			// 		...unit
			// 	} ),
			// 	id: 'unit-' + $mol_guid(),
			// } ) )
		}

		// add_unit( next: ReturnType<this[ 'defaults' ]>[ 'units_data' ] ) {
		add_unit( next: ReturnType<this[ 'defaults' ]>[ 'units_data' ][ 0 ] ) {
			this.units_data( [ ...this.units_data(), next ] )
		}

		remove_unit( id: string ) {
			// this.units_data( this.units_data().filter( unit => unit.id_root !== id ) )
		}

		remove_first() {
			this.units_data( this.units_data().slice( 1 ) )
		}

	}
}
