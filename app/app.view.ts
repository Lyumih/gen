namespace $.$$ {
	export class $gen_app extends $.$gen_app {

		@$mol_mem
		party( next?: $gen_engine_item_unit[] ): readonly $gen_engine_item_unit[] {
			return next ?? new this.$.$gen_engine_item_unit_all().all()
		}

		active_hero( next?: any ): $gen_engine_item_unit {
			return next ?? this.party()[ 0 ]
		}

		@$mol_mem
		user( next?: $gen_engine_user ): $gen_engine_user {
			return next ?? new $gen_engine_user_all().misha()
		}
	}
}
