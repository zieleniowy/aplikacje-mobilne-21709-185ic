import React from 'react';
import { Typography, Backdrop, Button, Paper, Table, TableRow, TableCell, IconButton, Alert } from '../../core/index';
import { ScrollView, View, Text } from 'react-native';
import { 
    Add, AddToDrive, Apps, CheckboxChecked, CheckboxUnchecked, CheckCircle, ChevronLeft, ChevronRight, Clear, ContentCopy, Create, CreateNewFolder, ErrorOutline, Event,
    ExpandLess, ExpandMore, Favorite, FavoriteBorder, Folder, Home, Logout, Info, LocalOffer, Mail, Menu, MoreVert, Notifications,  NotificationsActive, NotificationsAdd,
    Person, PersonAdd, PhotoCamera, Public, RadioButtonChecked, RadioButtonDot, RadioButtonUnchecked, Refresh, Remove, Search, Send, Settings, Share, Warning, WarningOutline
} from '../../icons';

const icons = [
    { label: 'Add', component: Add },
    { label: 'AddToDrive', component: AddToDrive },
    { label: 'Apps', component: Apps },
    { label: 'CheckboxUnchecked', component: CheckboxUnchecked },
    { label: 'CheckboxChecked', component: CheckboxChecked },
    { label: 'CheckCircle', component: CheckCircle },
    { label: 'ChevronLeft', component: ChevronLeft },
    { label: 'ChevronRight', component: ChevronRight },
    { label: 'Clear', component: Clear },
    { label: 'ContentCopy', component: ContentCopy },
    { label: 'Create', component: Create },
    { label: 'ErrorOutline', component: ErrorOutline },
    { label: 'Event', component: Event },
    { label: 'ExpandLess', component: ExpandLess },
    { label: 'ExpandMore', component: ExpandMore },
    { label: 'Favorite', component: Favorite },
    { label: 'FavoriteBorder', component: FavoriteBorder },
    { label: 'CreateNewFolder', component: CreateNewFolder },
    { label: 'Folder', component: Folder },
    { label: 'Home', component: Home },
    { label: 'LocalOffer', component: LocalOffer },
    { label: 'Logout', component: Logout },
    { label: 'Info', component: Info },
    { label: 'Mail', component: Mail },
    { label: 'Menu', component: Menu },
    { label: 'MoreVert', component: MoreVert },
    { label: 'Notifications', component: Notifications },
    { label: 'NotificationsActive', component: NotificationsActive },
    { label: 'NotificationsAdd', component: NotificationsAdd },
    { label: 'Person', component: Person },
    { label: 'PersonAdd', component: PersonAdd },
    { label: 'PhotoCamera', component: PhotoCamera },
    { label: 'Public', component: Public },
    { label: 'RadioButtonChecked', component: RadioButtonChecked },
    { label: 'RadioButtonDot', component: RadioButtonDot },
    { label: 'RadioButtonUnchecked', component: RadioButtonUnchecked },
    { label: 'Refresh', component: Refresh },
    { label: 'Remove', component: Remove },
    { label: 'Search', component: Search },
    { label: 'Send', component: Send },
    { label: 'Settings', component: Settings },
    { label: 'Share', component: Share },
    { label: 'Warning', component: Warning },
    { label: 'WarningOutline', component: WarningOutline },   
]


export default function BackdropPage(props){
    const [selectedIcon, selectIcon] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    return (
        <ScrollView>
            <Typography variant="h1" align="center">Ikony</Typography>
            <Paper style={{ padding: 8, marginTop: 8, marginBottom: 8 }}>
                <Typography align="justify">
                    Ikony znajdują się w folderze icons. Poniżej znajduje się pełna lista ikon, naciśnij na którąś z nich, aby zobaczyć jej nazwę. 
                    Aby z niej skorzystać, wystarczy ją zaimportować <Text style={{ fontWeight: "700" }}>import &#123; nazwaIkony &#125; from './icons'; </Text>
                </Typography>
            </Paper>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {icons.map(icon=>(
                    <IconButton style={{ margin: 12 }} key={icon.label} onPress={()=>{ setOpen(true); selectIcon(icon); }}>
                        <icon.component />
                    </IconButton>
                ))}
            </View>
            <Alert severity="warning">
                Nie wszystkie ikony z oryginalnego zestawu material-icons zostały tu przepisane - aby dodać kolejne - wystarczy skopiować kod svg danej ikony 
                i opakować go w komponent <Text style={{ fontWeight: "700" }}>Icon</Text> - najlepiej zobaczyć kod dowolnej ikony.
            </Alert>
            <Backdrop in={open} onExit={()=>setOpen(false)}>
                <Paper style={{ padding: 16 }}>
                    { selectedIcon && (
                        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h2">{ selectedIcon.label }</Typography>
                            <selectedIcon.component style={{ marginTop: 16 }} />
                        </View>
                    ) }
                </Paper>
            </Backdrop>
            <View style={{ paddingBottom: 200 }}></View>
        </ScrollView>
    );
}
