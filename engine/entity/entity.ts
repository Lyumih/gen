namespace $ {

	export class $gen_engine_entity extends $mol_object {
		constructor(
			readonly id = 'no-id-entity'
			// readonly id: string
		) { super() }

		defaults() {
			return {}
		}

		// defaults_patch() {
		// 	return {} as Partial<ReturnType<this[ 'defaults' ]>>
		// }

		// @$mol_mem
		// data( data?: ReturnType<this[ 'defaults' ]> ): ReturnType<this[ 'defaults' ]> {
		// 	return this.$.$mol_state_local.value( this.id, data ) as ReturnType<this[ 'defaults' ]>
		// 		?? { ...this.defaults(), ...this.defaults_patch() }
		// }

		@$mol_mem
		data( data?: ReturnType<this[ 'defaults' ]> ): ReturnType<this[ 'defaults' ]> {
			return this.$.$mol_state_local.value( this.id, data ) as ReturnType<this[ 'defaults' ]>
				?? { ...this.defaults() }
		}


		// @$mol_mem
		// data( data = {} ) {
		// 	return data
		// }

		static factory() {
			// const entity = new this( 'entity-factory' )
			// return entity.defaults()
			return new this( 'entity-factory' ).defaults()
		}

		@$mol_mem_key
		value<
			Field extends keyof ReturnType<this[ 'data' ]>
		>(
			field: Field,
			value?: ReturnType<this[ 'data' ]>[ Field ],
		): ReturnType<this[ 'data' ]>[ Field ] {

			return this.data( value === undefined
				? undefined
				: {
					... this.data(),
					[ field ]: value,
				}
			)[ field as never ]

		}


	}
}
