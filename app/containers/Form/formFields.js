export const TEXT_FIELDS = [
  { field: 'firstName', labelText: 'First Name/Nombre', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'lastName', labelText: 'Last Name/Apellido', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'title', labelText: 'Title/Titulo', hintText: 'Sra, Sr, Miss, Mrs, ...', fullWidth: false, requiredType: 'txt' },
  { field: 'organization', labelText: 'Organization/Organización', hintText: '', fullWidth: true, requiredType: 'txt' },
  { field: 'position', labelText: 'Position/Posición', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'email', labelText: 'Email', hintText: '', fullWidth: false, requiredType: 'email' },
  { field: 'emailConfirm', labelText: 'Verify email/comporbar email', hintText: '', fullWidth: false, requiredType: 'emailConfirm' },
  { field: 'work', labelText: 'Work/Trabajo', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'mobile', labelText: 'Mobile/Celular', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'country', labelText: 'Country/Pais', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'state', labelText: 'State/Estado', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'town', labelText: 'City/Ciudad', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'line', labelText: 'Line 1/C.P.', hintText: '', fullWidth: false, requiredType: 'txt' },
  { field: 'address', labelText: 'Primary Address/Direccion', hintText: '', fullWidth: true, requiredType: 'txt' }
]

export const RADIO_FIELDS = [
  {
    name: 'previouslyMeeting',
    question: 'Have you previously attending a GMI Meeting? / ¿Ha asistido a alguna Reunion del GMI con anterioridad?',
    radios: [ { value: true, label: 'Yes/Si' }, { value: false, label: 'No' } ],
    radioDefault: false
  },
  {
    name: 'delegateList',
    question: 'Do you wish to have your details included in the delegate list? / ¿Quiere que sus datos sean incluidos en el cuadernillo del evento?',
    radios: [ { value: true, label: 'Yes/Si' }, { value: false, label: 'No' } ],
    radioDefault: true
  },
  {
    name: 'firstWhole',
    question: '1rst Whole Genome Sequencing Technology and Produce Safety: Testing for pathogenic  bacterial DNA and its significance. May 18th and 19th / 1ra Tecnología de Secuenciación del Genoma Completo e Inocuidad de Frutas y Hortalizas Frescas: Buscando el ADN de bacterias patógenas y su significado. 18 y 19 de Mayo',
    radios: [ { value: true, label: 'Yes/Si' }, { value: false, label: 'No' } ],
    radioDefault: true
  }
]
