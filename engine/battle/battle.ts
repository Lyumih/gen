namespace $ {
	export class $gen_engine_battle extends $mol_object {

		@$mol_mem
		turn( next?: number ) {
			return next ?? 0
		}

		next_turn() {
			this.turn( this.turn() + 1 )
		}

		init_unit( unit: $gen_engine_unit ) {
			unit.next_turn = () => this.next_turn()
		}
	}
}
