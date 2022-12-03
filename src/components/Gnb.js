import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    const activeItem = 'home';
    
    return <div>
        <Menu inverted>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            // onClick={this.handleItemClick}
        />
        <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
        />
        <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
        />
        </Menu>
    </div>
}