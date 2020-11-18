/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 18.11.20 - 12:51
 **/
require('dotenv').config('../')
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })
