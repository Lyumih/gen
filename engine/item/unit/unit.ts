namespace $ {
	export class $gen_engine_item_unit extends $gen_engine_item {

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
			return next ?? 0
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

		use_attack( targets: $gen_engine_item_unit[], battle: $gen_engine_battle ) {
			targets.forEach( target => {
				target.health( target.health() - this.attack() )
			} )
			console.log( 'use_attack', targets )
			battle.next_turn()
		}

		use_skill( targets: $gen_engine_item_unit[], skill: $gen_engine_item_skill, battle: $gen_engine_battle ) {
			skill.use( this, targets, battle )
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
			return next ?? []
		}

		@$mol_mem
		skills( next?: $gen_engine_item_skill[] ): $gen_engine_item_skill[] {
			console.log( 'hero skills', next )
			return next ?? []
		}

		@$mol_mem
		buffs( next?: $gen_engine_item_buff[] ): $gen_engine_item_buff[] {
			return next ?? []
		}

		@$mol_mem
		inventory( next?: $gen_engine_item[] ): $gen_engine_item[] {
			return next ?? []
		}

		@$mol_mem
		shop( next?: $gen_engine_item[] ): $gen_engine_item[] {
			return next ?? []
		}

		next_turn() {}

		refill() {
			this.health( this.common_unit().health )
			this.attack( this.common_unit().attack )
		}

	}
}
