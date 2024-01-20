namespace $ {

	export class $gen_engine_entity extends $mol_object {
		constructor(
			readonly id = 'no-base-id'
			// readonly id: string
		) { super() }

		defaults() {
			return {}
		}

		defaults_patch() {
			return {} as Partial<ReturnType<this[ 'defaults' ]>>
		}

		@$mol_mem
		data( data?: ReturnType<this[ 'defaults' ]> ): ReturnType<this[ 'defaults' ]> {
			return this.$.$mol_state_local.value( this.id, data ) as ReturnType<this[ 'defaults' ]>
				?? { ...this.defaults(), ...this.defaults_patch() }
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
