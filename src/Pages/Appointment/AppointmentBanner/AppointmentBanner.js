import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    const disabledDays = [
        { from: new Date(1970, 0, 1), to: new Date() }
      ];
    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled = {disabledDays}
                            
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;