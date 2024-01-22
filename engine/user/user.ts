namespace $ {
	export class $gen_engine_user extends $gen_engine_entity {

		defaults() {

			const unit = new $gen_engine_item_unit().defaults()
			return {
				...super.defaults(),
				name: 'no name',
				login: 'no login',
				email: 'no email',
				role: 'user',
				units: [] as typeof unit[],
			}
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
				id: 'unit-id-fix-me-from-user'
			} ) )
		}

	}
}
