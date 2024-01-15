namespace $ {
	export class $gen_engine_item_talent_all extends $mol_object {

		@$mol_mem
		all(): $gen_engine_item_talent[] {
			return this.resource()
		}

		resource() {
			return [
				$gen_engine_item_talent.make( {
					name: () => 'Урон',
					description: () => 'Урон +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'ХП',
					description: () => 'ХП +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'Защ',
					description: () => 'Защита +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'УрХп',
					description: () => 'Урон +1 и ХП +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'Крит',
					description: () => 'Крит +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'КрУр',
					description: () => 'Крит урон +1',
				} ),
				$gen_engine_item_talent.make( {
					name: () => 'Хил',
					description: () => 'Хил +1',
				} ),
			]
		}

	}
}
