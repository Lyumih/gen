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
			// const user = new $gen_engine_user( '123' ).defaults()
			return $gen_engine_user.make( {
				defaults: () => ( {
					// ...user,
					id_root: 'id-root-user-misha',
					name: 'Миша',
					login: 'misha',
					email: 'misha@ya.ru',
					role: 'user',
					units_data: [
						// new $gen_engine_item_unit_all().milis().data(),
						// new $gen_engine_item_unit_all().mario().data(),
						// new $gen_engine_item_unit_all().jin().data(),
					],
				} ),
				id: 'misha-user',
			} )
		}
	}
}
