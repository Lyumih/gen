namespace $.$$ {
	export class $gen_app extends $.$gen_app {

		@$mol_mem
		party(): readonly $gen_engine_unit[] {
			return [
				this.$.$gen_engine_unit.make( { name: () => 'Вася', type: () => 'hero' } ),
				this.$.$gen_engine_unit.make( { name: () => 'Даша', type: () => 'hero', level: () => 10 } ),
				this.$.$gen_engine_unit.make( { type: () => 'hero' } ),
			]
		}
	}
}
