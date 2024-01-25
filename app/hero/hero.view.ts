namespace $.$$ {
	export class $gen_app_hero extends $.$gen_app_hero {

		@$mol_mem
		party_list() {
			return this.party().map( ( unit ) => this.Party( unit.id_root() ) )
		}

		@$mol_mem
		party(): $gen_engine_item_unit[] {
			return this.user().units()
		}

		create_unit( next?: any ) {
			console.log( $gen_engine_fake.random_name() )
			const name = $gen_engine_fake.random_name()
			const default_unit = new $gen_engine_item_unit().defaults()
			const unit = $gen_engine_item_unit.make( {
				defaults: () => ( {
					...default_unit,
					name,
					level: 5,
				} ),
				id: 'new-unit-'
			} )
			console.log( 'create unit', unit )
			this.user().add_unit( unit.data() )
			// this.party( [ ...this.party(), unit ] )
			// console.log( this.party() )
		}

		get_party_hero( id: string ) {
			return this.party().find( unit => unit.id_root() === id )
		}

		party_hero_name( id: string, next?: any ): string {
			console.log( id, next )
			return this.get_party_hero( id )?.name( next ) || 'no name'
		}

		party_hero_pick( id: string, next?: any ) {
			this.active_hero( id )
		}

		@$mol_mem
		hero() {
			return this.party().find( unit => unit.id_root() === this.active_hero() )
		}

		@$mol_mem
		active_hero( next?: any ): string {
			return next ?? this.party()[ 0 ]?.id_root() ?? ''
		}

		is_active_hero( id: string ) {
			return this.hero()?.id === id
		}

		name(): string {
			return `${ this.hero()?.icon() } ${ this.hero()?.name() }`
		}

		level(): string {
			return `⭐️ ${ this.hero()?.level() }`
		}

		points(): string {
			return `💎 ${ this.hero()?.points() }`
		}

		add_point_hero( next?: any ) {
			this.hero()?.points( ( this.hero()?.points() || 0 ) + 1 )
		}

		equipment_list(): readonly any[] {
			return this.hero()?.equipments()?.map( item => this.Equipment( item.id ) ) || []
		}

		get_equipment( id: string ) {
			return this.hero()?.equipments()?.find( item => item.id === id )
		}

		equipment_unequip( id: any, next?: any ) {
			this.engine().hero_unequip( id )
		}

		skill_points(): string {
			return `💎 ${ this.hero()?.points() }`
		}

		skill_list(): readonly any[] {
			return this.hero()?.skills()?.map( skill => this.Skill( skill.id ) ) || []
		}

		get_skill( id?: string ) {
			return this.hero()?.skills()?.find( skill => skill.id === id )
		}

		skill_level_up( id: string, next?: any ) {
			console.log( 'skill_level_up', id )
			this.get_skill( id )?.level( ( this.get_skill( id )?.level() || 0 ) + 1 )
		}

		skill_mode( id: any ): string {
			return this.get_skill( id )?.name() || 'no mode'
		}

		skill_add_mode( id: string, next?: any ) {
			const mode = this.engine().all_mode()
		}

		skill_unequip( id: any, next?: any ) {
			this.engine().skill_unequip( id )
		}

		inventory_list(): readonly any[] {
			return this.hero()?.inventory().map( item => this.Inventory_item( item.id ) ) || []
		}

		get_inventory_item( id: string ) {
			return this.hero()?.inventory().find( item => item.id === id )
		}

		inventory_item_sell( id: any, next?: any ) {
			this.engine().inventory_sell( id )
		}

		inventory_equip( id: any, next?: any ) {
			this.engine().inventory_equip( id )
		}

		shop_list(): readonly any[] {
			return this.hero()?.shop().map( item => this.Shop_item( item.id ) ) || []
		}

		get_shop_item( id: string ) {
			return this.hero()?.shop().find( item => item.id === id )
		}

		shop_item_bue( id: any, next?: any ) {
			this.engine().shop_buy( id )
		}


	}
}
