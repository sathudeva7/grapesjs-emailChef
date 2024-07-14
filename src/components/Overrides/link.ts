import { Editor } from 'grapesjs';
import { LoadOverridePlugin } from '.';
import Form from '../Materials/Form';
import InputModalContent from '../Materials/InputModalContent';
import * as ReactDOM from 'react-dom';

const Link = (editor: Editor, opts: LoadOverridePlugin) => {
  const domc = editor.DomComponents;

  domc.addType('link', {
    view: {
      onRender() {
        this.el.addEventListener('dblclick', () => {
          this.openModal();
        });
      },

      openModal() {
        editor.trigger('modal', {
          open: true,
          title: 'Custom Input Modal',
          content: (
            <InputModalContent
              onSubmit={(value) => console.log('Input value:', value)}
            />
          ),
          close: () => editor.trigger('modal', { open: false }),
          attributes: {},
        });
      },
    },
  });
};

export default Link;
