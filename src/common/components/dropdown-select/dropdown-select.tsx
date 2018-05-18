import * as React from 'react';
import './dropdown-select.css';

interface DropdownSelectOption {
  name: string;
  value?: any;
}

class DropdownSelectState {
  selected: number;
  open: boolean;

  constructor() {
    this.selected = null;
    this.open = false;
  }
}

interface DropdownSelectProps {
  options: DropdownSelectOption[];
  onSelect?: (option: DropdownSelectOption, index: number, event: Event) => {};
}

export class DropdownSelect extends React.Component<DropdownSelectProps, DropdownSelectState> {
  node: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.state = new DropdownSelectState();
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
    if (this.node && !this.node.contains(event.target as Node) && this.state.open) {
      this.toggle()
    }
  }

  select(option: any, index: number, e: Event) {
    e.stopPropagation();
    if (this.props.onSelect) this.props.onSelect(option, index, e);
    this.setState({ selected: index });
  }

  render() {
    const options = !this.state.open ? null :
      <div className="dropdown-select-options">
        {
          this.props.options.map((option, index) => {
            const className = 'dropdown-select-option' + (this.isSelected(index) ? ' selected' : '');
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
      <div className="DropdownSelect" onClick={this.toggle.bind(this)} ref={node => this.node = node}>
        <div className="selected-option">{selected || 'Select'}</div>
        {options}
      </div>
    );
  }
}