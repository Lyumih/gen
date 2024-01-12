namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {
		@$mol_mem
		hero() {
			return new this.$.$gen_engine_unit()
		}

		@$mol_mem
		enemy() {
			return new this.$.$gen_engine_unit()
		}

		use_hero_attack( next?: any ) {
			this.hero().use_attack( this.enemy() )
		}

		use_enemy_attack( next?: any ) {
			this.enemy().use_attack( this.hero() )
		}

		restart() {
			this.hero().health( 19 )
			this.enemy().health( 20 )
		}

		is_game_continue() {
			return !this.hero().is_dead() && !this.enemy().is_dead()
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
