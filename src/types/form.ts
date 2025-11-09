export interface ActionTypes {
  isEditing?: boolean;
  pending?: boolean;
  onDelete?: () => Promise<void>;
  deletePending?: boolean;
}
