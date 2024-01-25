namespace $ {
	export class $gen_engine_battle extends $mol_object {

		@$mol_mem
		turn( next?: number ) {
			// $mol_wire_solid()
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
			// $mol_wire_solid()
			return next ?? []
		}

		log( next: string ) {
			this.history( [ ...this.history(), next ] )
		}

		log_attack( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[] ) {
			if( targets.length > 0 ) {
				this.log( `**${ source.icon_name() }** *атакует* ** ${ targets.map( target => target.icon_name() ).join( ', ' ) } **` )
			} else {
				this.log( `**${ source.icon_name() }** *атакует* ** ничего **` )
			}
		}

		log_skill( source: $gen_engine_item_unit, targets: $gen_engine_item_unit[], skill: $gen_engine_item_skill ) {
			this.log( `**${ source.icon_name() }** *использует* **${ skill.icon_name() }**` )
		}

		log_targets_not_found( source: $gen_engine_item_unit ) {
			this.log( `**${ source.icon_name() }** - целей не найдено` )
		}

		log_move( source: $gen_engine_item_unit, x: number, y: number ) {
			this.log( `**${ source.icon_name() }** движется к ${ x }, ${ y }` )
		}
	}
}
