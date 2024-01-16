namespace $ {
	export class $gen_engine_battle extends $mol_object {

		@$mol_mem
		turn( next?: number ) {
			return next ?? 0
		}

		next_turn() {
			this.turn( this.turn() + 1 )
		}

		init_unit( unit: $gen_engine_item_unit ) {
			unit.next_turn = () => this.next_turn()
		}

		@$mol_mem
		history( next?: string[] ) {
			return next ?? []
		}

		log( next: string ) {
			this.history( [ ...this.history(), next ] )
		}

		log_attack( source: $gen_engine_item_unit, target: $gen_engine_item_unit ) {
			this.log( `${ source.name() } атакует ${ target.name() } на ${ source.attack() } урона` )
		}

		log_skill( source: $gen_engine_item_unit, target: $gen_engine_item_unit, skill: $gen_engine_item_skill ) {
			this.log( `${ source.name() } использует ${ skill.name() } на ${ target.name() }` )
		}
	}
}
