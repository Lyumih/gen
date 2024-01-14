namespace $ {
	export class $gen_engine_item_talent_all extends $.$mol_object {

		@$mol_mem
		all(): $gen_engine_item_talent[] {
			return this.resource()
		}

		resource() {
			return [
				this.$.$gen_engine_item_talent.make( {
					name: () => 'Урон',
					description: () => 'Урон +1',
				} ),
				this.$.$gen_engine_item_talent.make( {
					name: () => 'ХП',
					description: () => 'ХП +1',
				} ),
			]
		}

	}
}
