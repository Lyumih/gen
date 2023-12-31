namespace $.$$ {

	type Skill = { id: string, name: string, level: number }

	export class $gen_engine extends $.$mol_object {

		seed() {
			return '1'
		}

		@$mol_mem
		hero( next?: any ) {
			return next ?? {
				name: 'Milis',
				level: 5,
				skills: this.hero_skills(),
				point: {
					skill: 4,
				}
			}
		}

		@$mol_mem
		hero_skills( next?: any ): Skill[] {
			return next ?? [ { id: '1', name: 'Атака', level: 1 }, { id: '2', name: 'Защита', level: 1 } ]
		}

		@$mol_mem
		reward( next?: any ) {
			console.log( 'reward', next )
			return next ?? this.get_random_skill()
		}

		make_win( next?: any ) {
			console.log( 'make win', next )
			this.reward()
			this.get_random_skill()
			return next ?? false
		}

		@$mol_mem
		all_skills() {
			return [ {
				id: '1',
				name: 'Атака'
			}, {
				id: '2',
				name: 'Защита'
			}, {
				id: '3',
				name: 'Хил'
			} ]
		}

		@$mol_mem
		get_random_skill( next?: any ) {
			console.log( 'get_random_skill' )
			return { ...this.$.$mol_array_lottery( this.all_skills() ), level: 1 }
		}

		add_hero_skill() {
			console.log( 'add_hero_skill', this.hero() )
			this.hero_skills( [ ...this.hero_skills(), this.get_random_skill() ] )
		}

		skill_level_up( id: string ) {
			const skills = this.hero_skills()
			const skill = skills.find( skill => skill.id === id )
			if( skill && skills ) {
				skills.find( skill => skill.id === id )!.level = skill.level + 1
				console.log( skills )
				this.hero_skills( skills )
			}
		}
	}
}
