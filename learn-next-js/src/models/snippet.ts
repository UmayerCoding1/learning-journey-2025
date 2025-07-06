import  {Schema,model,models,Document} from "mongoose";

export interface ISnippet {
    title: string;
    code: string
};

export interface ISnippetModel extends ISnippet, Document {};


const SnippetSchema = new Schema<ISnippetModel>({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


export const Snippet = models?.Snippet || model<ISnippet>("Snippet", SnippetSchema);