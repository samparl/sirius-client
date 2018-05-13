import * as React from 'react';
import './filter-dropdown.css';

interface FilterDropdownOption {
    name: string;
    value?: any;
}

class FilterDropdownState {
    selected: number;
    open: boolean;

    constructor() {
        this.selected = null;
        this.open = false;
    }
}

interface FilterDropdownProps {
    options: FilterDropdownOption[];
    onSelect?: (option: FilterDropdownOption, index: number, event: Event) => {};
}

export class FilterDropdown extends React.Component<FilterDropdownProps, FilterDropdownState> {
    node: HTMLDivElement;

    constructor(props: any) {
        super(props);
        this.state = new FilterDropdownState();
    }

    componentDidMount() {
        document.addEventListener('click', this.close.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.close.bind(this));
    }

    private isSelected(index: number) {
        return index === this.state.selected;
    }

    toggle() {
        this.setState({ open: !this.state.open });
    }

    close(event: Event) {
        if (!this.node.contains(event.target as Node) && this.state.open) {
            this.toggle()
        }
    }

    select(option: any, index: number, e: Event) {
        e.stopPropagation();
        if (this.props.onSelect) this.props.onSelect(option, index, e);
        this.setState({selected: index});
    }

    render() {
        const options = !this.state.open ? null :
            <div className="filter-dropdown-options">
                {
                    this.props.options.map((option, index) => {
                        const className = 'filter-dropdown-option' + (this.isSelected(index) ? ' selected' : '');
                        return <div className={className}
                            key={index}
                            onClick={this.select.bind(this, option, index)}>
                            {option.name}
                        </div>
                    })
                }
            </div>

        const selected = this.props.options[this.state.selected] && this.props.options[this.state.selected].name;
        return (
            <div className="FilterDropdown" onClick={ this.toggle.bind(this) } ref={ node => this.node = node }>
                <div className="selected-option">{ selected || 'Select' }</div>
                { options }
            </div>
        );
    }
}