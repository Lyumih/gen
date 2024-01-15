namespace $ {
	export class $gen_engine_item_equipment extends $gen_engine_item {

		override type() {
			return 'equipment'
		}

		/** Часть снаряжения */
		part() {
			return 'equipment'
		}

		@$mol_mem
		props( next?: $gen_engine_item_prop[] ): $gen_engine_item_prop[] {
			return next ?? []
		}

	}
}
