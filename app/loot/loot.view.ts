namespace $.$$ {
	export class $gen_app_loot extends $.$gen_app_loot {

		generate_item( next?: any ) {
			const skill = $mol_array_lottery( this.engine().all_skills() )
			const eqiup = $mol_array_lottery( this.engine().all_equip() )
			const mode = $mol_array_lottery( this.engine().all_mode() )
			const item = $mol_array_lottery( [ skill, eqiup, mode ] )
			this.engine().inventory( [ ...this.engine().inventory(), item ] )
			this.history( [ ...this.history(), item ] )
		}

		@$mol_mem
		history( next?: any ): any[] {
			return next ?? []
		}

		new_item(): string {
			const history = this.history()
			return JSON.stringify( history[ history.length - 1 ] || 'Нет предмета' )
		}


		history_text(): string {
			return 'История:\n' + JSON.stringify( this.history() )
		}

	}
}
