# opis
Projekt składa się ze zbioru komponentów przygotowanych do react native na wizualne podobieństwo do komponentów z [MUI](https://mui.com) w ramach zaliczenia przedmiotu aplikacje mobilne na AMW.  
Po zainstalowaniu i uruchomieniu projektu (przez aplikację Expo) widzimy zbiór wszystkich dostępnych komponentów wraz z ich opcjami. Aby wykorzystać komponenty we własnym projekcie, wystarczy zaimportować do niego folder core (i icons - jeśli chcemy również korzystać z ikon).
![alt text](/assets/git.png)

## dostępne komponenty
- Alert
- AppBar
- Avatar
- Backdrop
- Badge
- Button
    - ButtonBase
    - ButtonContained
    - ButtonOutlined
    - IconButton
- ButtonGroup
- Checkbox
- Container
- Dialog
- Drawer
- Link
- List
    - ListItem
        - ListItemIcon
        - ListItemSecondaryAction
        - ListItemText
- Paper
- Portal - udostępniony również jako osobny [komponent](https://github.com/zieleniowy/rportal) react (niekoniecznie native) 
- RadioGroup
    - RadioButton
- Table
    - TableRow
        - TableCell
- TextField
- ThemeProvider
- Transition
- Typography

### dodatkowo 2 hooki:
- useTheme - daje dostęp do sparsowanego obiektu tematu (np.: kolorów, czcionek itd)
- useStyles - daje dostęp do styli przygotowanych na podstawie tematu z **useTheme**

