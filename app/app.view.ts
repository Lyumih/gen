namespace $.$$ {
	export class $gen_app extends $.$gen_app {

		@$mol_mem
		party(): readonly $gen_engine_unit[] {
			return [
				this.$.$gen_engine_unit.make( { name: () => 'Вася' } ),
				this.$.$gen_engine_unit.make( { name: () => 'Даша', level: () => 10 } ),
				this.$.$gen_engine_unit.make( {} ),
			]
		}

		@$mol_mem
		common_party() {
			return [
				this.$.$gen_engine_unit.make( { name: () => 'Вася', type: () => 'hero' } ),
				this.$.$gen_engine_unit.make( { name: () => 'Даша', level: () => 10 } ),
				this.$.$gen_engine_unit.make( {} ),
			]
		}

	}
}