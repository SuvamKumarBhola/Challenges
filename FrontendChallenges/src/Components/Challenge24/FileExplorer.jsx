import FileSystemItem from './FileSystemItem';
import { fileSystem } from './data';

export default function FileExplorer() {
  return (
    <div style={{ padding: '50px', fontFamily: 'monospace', fontSize: '16px' }}>
      <h1>Recursive File Explorer</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Click folders to toggle expansion. Works for infinite depth.
      </p>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
        <FileSystemItem node={fileSystem} />
      </div>
    </div>
  );
}