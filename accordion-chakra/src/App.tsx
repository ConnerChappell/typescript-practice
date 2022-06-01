import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/accordion'
import { Box } from '@chakra-ui/react'
import ShiftColumn from './components/ShiftColumn'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton bgColor='#F1F3F6' h='32px' border='none' fontWeight='bold' cursor='pointer'>
              <Box flex='1' textAlign='left'>
                Unassigned
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt='8px' pb='24px' pl='25%' display='flex' flexDirection='row' bgColor='white'>
            <ShiftColumn />
            <ShiftColumn />
            <ShiftColumn />
            <ShiftColumn />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton bgColor='#F1F3F6' h='32px' border='none' fontWeight='bold' cursor='pointer'>
              <Box flex='1' textAlign='left'>
                100 Hall
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt='8px' pb='24px' pl='25%' display='flex' flexDirection='row' bgColor='white'>
            <ShiftColumn />
            <ShiftColumn />
            <ShiftColumn />
            <ShiftColumn />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
