namespace $ {
	export class $gen_engine_unit extends $mol_object {

		@$mol_mem
		id() {
			return $mol_guid()
		}

		@$mol_mem
		name( next?: string ) {
			return next ?? 'Unit'
		}

		@$mol_mem
		type( next?: string ) {
			return next ?? 'unit'
		}

		@$mol_mem
		level( next?: number ) {
			return next ?? 1
		}

		@$mol_mem
		points( next?: number ) {
			return next ?? 0
		}

		@$mol_mem
		health( next?: number ) {
			return next ?? this.common_unit().health
		}

		@$mol_mem
		attack( next?: number ) {
			return next ?? this.common_unit().attack
		}

		use_attack( target: $gen_engine_unit ) {
			target.health( target.health() - this.attack() )
			this.next_turn()
		}

		use_skill( targets: $gen_engine_unit[], skill: any ) {
			skill.use( this, targets )
			this.next_turn()
		}

		is_dead() {
			return this.health() <= 0
		}

		common_unit() {
			return {
				name: 'Unit',
				health: 20,
				attack: 10,
			}
		}

		@$mol_mem
		equipments( next?: $gen_engine_item_equipment[] ) {
			return next ?? [ new $gen_engine_item_equipment ]

		}

		next_turn() {}

		refill() {
			this.health( this.common_unit().health )
			this.attack( this.common_unit().attack )
		}

	}
}
