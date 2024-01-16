namespace $ {
	export class $gen_engine_item_unit_all extends $mol_object {

		@$mol_mem
		all(): $gen_engine_item_unit[] {
			return this.resource()
		}

		resource() {
			return [
				this.milis(), this.jin(), this.mario()
			]
		}

		milis() {
			const unit = new $gen_engine_item_unit()
			unit.name( 'Milis' )
			unit.level( 1000 )
			unit.points( 1000 )
			unit.equipments( [
				new $gen_engine_item_equipment_all().sword()
			] )
			unit.skills( [
				new $gen_engine_item_skill_all().heal(),
				new $gen_engine_item_skill_all().strong_attack(),
				new $gen_engine_item_skill_all().strong_attack_and_heal()
			] )
			return unit
		}

		/**
		 * https://t.me/h_y_o_o/4484/10086  
		 * Можно мне гиперфокальный ветрогенератор безумия.  
		 * 5% вероятность сделать бум при попытке взаимодействия с меметичными (мемы) объектами.  
		 * Навешивает баф "мем"
		 */
		jin() {
			const unit = new $gen_engine_item_unit()
			unit.name( 'Jin' )
			unit.level( 1 )
			unit.points( 1 )
			unit.skills( [
				new $gen_engine_item_skill_all().hyperfocal_madness_wind_generator()
			] )
			return unit
		}

		mario() {
			const unit = new $gen_engine_item_unit()
			unit.name( 'Mario' )
			unit.level( 333 )
			unit.points( 333 )
			return unit
		}

	}
}
