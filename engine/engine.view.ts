namespace $.$$ {
	export class $gen_engine extends $.$gen_engine {
		
		hero() {
			return {
				name: 'Milis',
				level: 5,
				skills: [{name: 'Атака'}, {name: 'Защита'}]
			}
		}

		reward() {
			return ({name: 'хил'})
		}

		make_win( next?: any ) {
			console.log('make win', next)
			return next ?? false
		}
		
	}
}
