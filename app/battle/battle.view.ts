namespace $.$$ {
	export class $gen_app_battle extends $.$gen_app_battle {
		turn(): string {
			return `Ход: ${ this.battle().turn() }`
		}

		@$mol_mem
		hero() {
			return this.party()[ 1 ]
		}

		@$mol_mem
		enemy() {
			return this.party()[ 2 ]
		}

		restart() {
			this.hero().refill()
			this.enemy().refill()
			this.battle().turn( 0 )
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

		history(): string {
			console.log( this.battle().history() )
			return this.battle().history().join( '\n' )
		}

	}
}
