namespace $ {
	export class $gen_engine_item_unit_all extends $mol_object {

		@$mol_mem
		all(): $gen_engine_item_unit[] {
			return this.resource()
		}

		resource() {
			return [
				this.milis(), this.mario(), this.jin(),
				// this.milis(),
			]
		}

		milis() {
			return $gen_engine_item_unit.make( {
				defaults_patch: () => ( {
					name: 'Milis',
					icon: '👩🏼‍⚕️',
					level: 1000,
					points: 1000,
					x: 0,
					y: 0,
					skills: [
						new $gen_engine_item_skill_all().heal().defaults_patch() as any,
					]
				} ),
				id: 'hero-milis-1'
			} )
			// const unit = new $gen_engine_item_unit( '123' )
			// unit.name( 'Milis' )
			// unit.level( 1000 )
			// unit.points( 1000 )
			// unit.x( 3 )
			// unit.y( 3 )
			// unit.speed( 3 )
			// unit.equipments( [
			// 	new $gen_engine_item_equipment_all().sword()
			// ] )
			// unit.skills( [
			// 	new $gen_engine_item_skill_all().heal(),
			// 	new $gen_engine_item_skill_all().strong_attack(),
			// 	new $gen_engine_item_skill_all().strong_attack_and_heal()
			// ] )
			// return unit
		}

		/**
		 * https://t.me/h_y_o_o/4484/10086  
		 * Можно мне гиперфокальный ветрогенератор безумия.  
		 * 5% вероятность сделать бум при попытке взаимодействия с меметичными (мемы) объектами.  
		 * Навешивает баф "мем"
		 */
		jin() {
			return $gen_engine_item_unit.make( {
				defaults_patch: () => ( {
					name: 'Jin',
					level: 3,
					points: 5,
					x: 1,
					y: 3,
				} ),
				id: 'hero-jin-2'
			} )
			// const unit = new $gen_engine_item_unit()
			// unit.reference( 'https://t.me/nin_jin' )
			// unit.name( 'Jin' )
			// unit.level( 1 )
			// unit.points( 1 )
			// unit.x( 2 )
			// unit.y( 1 )
			// unit.speed( 1 )
			// unit.skills( [
			// 	new $gen_engine_item_skill_all().hyperfocal_madness_wind_generator()
			// ] )
			// return unit
		}

		mario() {
			return $gen_engine_item_unit.make( {
				defaults_patch: () => ( {
					name: 'Бурь',
					icon: '🧙🏼‍♂️',
					level: 333,
					points: 544,
					attack_range: 2,
					x: 1,
					y: 2,
				} ),
				id: 'hero-mario-3'
			} )
			// const unit = new $gen_engine_item_unit()
			// unit.reference( 'https://t.me/fkusnyahin' )
			// unit.name( 'Бурь' )
			// unit.level( 333 )
			// unit.points( 333 )
			// unit.attack_range( 2 )
			// unit.equipments( [
			// 	new $gen_engine_item_equipment_all().staff(),
			// 	new $gen_engine_item_equipment_all().whip()
			// ] )
			// unit.skills( [
			// 	new $gen_engine_item_skill_all().teleport(),
			// 	new $gen_engine_item_skill_all().gravity_shield(),
			// 	new $gen_engine_item_skill_all().lightning_spear(),
			// 	new $gen_engine_item_skill_all().lightning_bolt()
			// ] )
			// return unit
		}

	}
}
