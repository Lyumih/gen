namespace $ {
	export class $gen_engine_item_talent_all extends $mol_object {

		@$mol_mem
		all(): $gen_engine_item_talent[] {
			return this.resource()
		}

		resource() {
			// const talent = new $gen_engine_item_talent()
			// talent.data( {
			// 	name: 'test',
			// } )
			return [
				$gen_engine_item_talent.make( {
					defaults_patch: () => ( {
						name: 'ХП',
						description: 'ХП + 1'
					} ),
					id: 'tal-1'
					// defaults: () => ( {
					// 	...$gen_engine_item_talent.defaults,
					// 	name: 'ХП',
					// 	description: 'ХП + 1'
					// } )
				} ),
				$gen_engine_item_talent.make( {
					defaults_patch: () => ( {
						name: 'Защ',
						description: 'Защита +1'
					} ),
					id: 'tal-2'
					// defaults: () => ( {
					// 	...$gen_engine_item_talent.defaults,
					// 	name: 'ХП',
					// 	description: 'ХП + 1'
					// } )
				} ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'ХП',
				// 	description: () => 'ХП +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'Защ',
				// 	description: () => 'Защита +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'УрХп',
				// 	description: () => 'Урон +1 и ХП +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'Крит',
				// 	description: () => 'Крит +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'КрУр',
				// 	description: () => 'Крит урон +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	name: () => 'Хил',
				// 	description: () => 'Хил +1',
				// } ),
				// $gen_engine_item_talent.make( {
				// 	defaults: () => {
				// 		return {

				// 		}
				// 	}
				// })
			]
		}

	}
}
