namespace $ {
	export class $gen_engine_battle extends $.$mol_object {

		@$mol_mem
		units( next?: $gen_engine_unit[] ) {
			return next ?? []
		}

		@$mol_mem
		turn( next?: number ) {
			return next ?? 0
		}

		next_turn() {
			console.log( 'next_turn' )
			this.turn( this.turn() + 1 )
		}
	}
}
