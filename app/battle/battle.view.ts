namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {
		@$mol_mem
		get_hero() {
			return new this.$.$gen_engine_unit()
		}

		@$mol_mem
		get_enemy() {
			return new this.$.$gen_engine_unit()
		}

		use_hero_attack( next?: any ) {
			this.get_hero().use_attack( this.get_enemy() )
		}

		use_enemy_attack( next?: any ) {
			this.get_enemy().use_attack( this.get_hero() )
		}

		restart() {
			this.get_hero().health( 19 )
			this.get_enemy().health( 20 )
		}

		is_game_continue() {
			return this.get_hero().health() > 0 && this.get_enemy().health() > 0
		}

		is_game_end() {
			return !this.is_game_continue()
		}

		end(): string {
			return this.is_game_continue() ? '' : 'Игра закончена'
		}

		get_reward( next?: any ) {
			this.engine().inventory( [ ...this.engine().inventory(), this.engine().reward() ] )
			this.restart()
		}

	}
}
