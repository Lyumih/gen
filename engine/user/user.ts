namespace $ {
	export class $gen_engine_user extends $gen_engine_entity {

		defaults() {

			const unit = new $gen_engine_item_unit().defaults_patch()
			return {
				...super.defaults(),
				name: 'no name',
				login: 'no login',
				email: 'no email',
				role: 'user',
				units: [] as typeof unit[],
			}
		}

		logout() {
			console.log( 'Пользователь вышел' )
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

		units( next?: $gen_engine_item_unit[] ): $gen_engine_item_unit[] {
			const value = this.value( 'units', next?.map( unit => unit.defaults() ) )
			return value.map( unit => $gen_engine_item_unit.make( {
				defaults_patch: () => ( {
					...unit
				} ),
				id: 'unit-' + $mol_guid(),
			} ) )
		}

		add_unit( next?: any ) {
			this.units( [ ...this.units(), next ] )
		}

	}
}
