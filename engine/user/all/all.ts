namespace $ {

	export class $gen_engine_user_all extends $mol_object {
		@$mol_mem
		all(): $gen_engine_user[] {
			return this.resource()
		}

		resource(): $gen_engine_user[] {
			return [
				this.misha()
			]
		}

		misha() {
			return $gen_engine_user.make( {
				defaults_patch: () => ( {
					name: 'Миша',
					login: 'misha',
					email: 'misha@ya.ru',
					role: 'user',
					units: [
						new $gen_engine_item_unit_all().milis().defaults_patch(),
						new $gen_engine_item_unit_all().mario().defaults_patch(),
						new $gen_engine_item_unit_all().jin().defaults_patch(),
					],
				} ),
				id: 'misha-user',
			} )
		}
	}
}
