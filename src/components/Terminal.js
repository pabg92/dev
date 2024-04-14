import React, { useState } from 'react';
import '../css/Terminal.css';

const asciiArt = `
######################################################
# ____ _ _ ____ _ ___ ____ _______ __#
#| _ \\| || | | __ )| | / _ \\ | _ \\| ____\\ \\ / /#
#| |_) | || |_| _ \\| | | | | || | | | _| \\ \\ / / #
#| __/|__ _| |_) | |__| |_| || |_| | |___ \\ V / #
#|_| |_| |____/|_____\\___(_)____/|_____| \\_/ #
######################################################
`;

function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleCommand = command => {
    const newOutput = `Executing command: ${command}`;
    setOutput(prevOutput => [...prevOutput, newOutput]);
    setInput('');
  };

  return (
    <div className="terminal-container">
      <pre className="ascii-art">{asciiArt}</pre>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleCommand(input)}
        placeholder="Type a command..."
      />
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
