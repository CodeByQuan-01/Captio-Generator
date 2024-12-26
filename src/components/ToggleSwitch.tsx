import React from 'react'

interface ToggleSwitchProps {
  isOn: boolean
  handleToggle: () => void
  onLabel: string
  offLabel: string
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle, onLabel, offLabel }) => {
  return (
    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={isOn}
        onChange={handleToggle}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
          isOn ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span className="sr-only">{isOn ? onLabel : offLabel}</span>
      </label>
    </div>
  )
}

export default ToggleSwitch

