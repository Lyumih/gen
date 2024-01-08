namespace $.$$ {
	export class $gen_app_loot extends $.$gen_app_loot {

		generate_item( next?: any ) {
			const skill = $mol_array_lottery( this.engine().all_skills() )
			const eqiup = $mol_array_lottery( this.engine().all_equip() )
			const item = $mol_array_lottery( [ skill, eqiup ] )
			this.history( [ ...this.history(), item ] )
		}

		new_item(): string {
			console.log( this.history().length )
			const history = this.history()
			return JSON.stringify( history[ 0 ] )
		}

		@$mol_mem
		history( next?: any ): any[] {
			console.log( 'history, ', next )
			return next ?? []
		}

		history_text(): string {
			return JSON.stringify( this.history() )
		}

	}
}
